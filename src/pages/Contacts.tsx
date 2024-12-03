/* eslint-disable */

import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  InputAdornment,
  Chip,
  TablePagination,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
} from '@mui/material';
import {
  Search as SearchIcon,
  ContentCopy as CopyIcon,
  Download as DownloadIcon,
  Visibility as RevealIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

interface Contact {
  _id: string;
  name: string;
  title: string;
  company: string;
  mobileNumber: string;
  email: string;
  revealedAt?: string;
  linkedinUrl?: string;
}

// Mock data for development
const mockContacts: Contact[] = [
  {
    _id: '1',
    name: 'John Smith',
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    mobileNumber: '+1 (555) 123-4567',
    email: 'john.smith@techcorp.com',
    linkedinUrl: 'john-smith-123'
  },
  {
    _id: '2',
    name: 'Sarah Johnson',
    title: 'Product Manager',
    company: 'Innovation Labs',
    mobileNumber: '+1 (555) 987-6543',
    email: 'sarah.j@innovationlabs.com',
    linkedinUrl: 'sarahj-pm'
  },
  // Add more mock contacts as needed
];

const Contacts: React.FC = () => {
  const { user } = useAuth();
  const [contacts, setContacts] = useState<Contact[]>(mockContacts);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [revealedContacts, setRevealedContacts] = useState<Set<string>>(new Set());
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [showRevealDialog, setShowRevealDialog] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    // TODO: Add toast notification
  };

  const handleRevealClick = (contact: Contact) => {
    setSelectedContact(contact);
    setShowRevealDialog(true);
  };

  const handleRevealConfirm = () => {
    if (!selectedContact || !user) return;

    if (user.credits < 1) {
      setError('Insufficient credits. Please top up your credits to reveal contacts.');
      return;
    }

    // In real implementation, this would make an API call
    setRevealedContacts(prev => new Set(Array.from(prev).concat(selectedContact._id)));
    setShowRevealDialog(false);
    setSelectedContact(null);
    // TODO: Update user credits through AuthContext
  };

  const isContactRevealed = (contactId: string) => {
    return revealedContacts.has(contactId);
  };

  const maskEmail = (email: string) => {
    const [username, domain] = email.split('@');
    return `${username[0]}***@${domain}`;
  };

  const maskPhone = (phone: string) => {
    // Show '04' prefix and mask the rest with *
    return '04' + '*'.repeat(8); // Standard Australian mobile length
  };

  const filteredContacts = contacts.filter((contact) =>
    Object.values(contact).some((value) =>
      value?.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const exportContacts = () => {
    const revealedContactsList = contacts.filter(contact => 
      isContactRevealed(contact._id)
    );

    const csvContent = [
      ['Name', 'Title', 'Company', 'Mobile', 'Email', 'Revealed Date'],
      ...revealedContactsList.map((contact) => [
        contact.name,
        contact.title,
        contact.company,
        contact.mobileNumber,
        contact.email,
        new Date().toLocaleDateString(), // In real app, use contact.revealedAt
      ]),
    ]
      .map((row) => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'revealed-contacts.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Box>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4">Contacts</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {revealedContacts.size} contacts revealed · {user?.credits || 0} credits remaining
          </Typography>
        </Box>
        <Button
          variant="outlined"
          startIcon={<DownloadIcon />}
          onClick={exportContacts}
          disabled={revealedContacts.size === 0}
        >
          Export Revealed Contacts
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search contacts by name, title, or company..."
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{ mb: 3 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Mobile</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredContacts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((contact) => {
                const revealed = isContactRevealed(contact._id);
                return (
                  <TableRow key={contact._id}>
                    <TableCell>{contact.name}</TableCell>
                    <TableCell>{contact.title}</TableCell>
                    <TableCell>{contact.company}</TableCell>
                    <TableCell>
                      {revealed ? (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          {contact.mobileNumber}
                          <IconButton
                            size="small"
                            onClick={() => handleCopy(contact.mobileNumber)}
                          >
                            <CopyIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      ) : (
                        maskPhone(contact.mobileNumber)
                      )}
                    </TableCell>
                    <TableCell>
                      {revealed ? (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          {contact.email}
                          <IconButton
                            size="small"
                            onClick={() => handleCopy(contact.email)}
                          >
                            <CopyIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      ) : (
                        maskEmail(contact.email)
                      )}
                    </TableCell>
                    <TableCell align="right">
                      <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end' }}>
                        {!revealed && (
                          <Button
                            size="small"
                            variant="contained"
                            onClick={() => handleRevealClick(contact)}
                            startIcon={<RevealIcon />}
                          >
                            Reveal
                          </Button>
                        )}
                        {contact.linkedinUrl && (
                          <IconButton
                            size="small"
                            color="primary"
                            component="a"
                            href={`https://linkedin.com/in/${contact.linkedinUrl}`}
                            target="_blank"
                          >
                            <LinkedInIcon />
                          </IconButton>
                        )}
                      </Box>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredContacts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>

      <Dialog open={showRevealDialog} onClose={() => setShowRevealDialog(false)}>
        <DialogTitle>Reveal Contact Information</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Revealing this contact will use 1 credit from your balance.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            You have {user?.credits || 0} credits remaining.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowRevealDialog(false)}>Cancel</Button>
          <Button onClick={handleRevealConfirm} variant="contained" color="primary">
            Reveal Contact
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Contacts;
