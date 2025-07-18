import { useState } from 'react'
import './App.css'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';


function App() {
 const[emailContent, setEmailContent] = useState('');
 const[tone, setTone] = useState('');
 const[generatedReply, setGeneratedReply] = useState('');
 const[loading, setLoading] = useState(false);
 const[error, setError] = useState(null);

 const handleSubmit =async () => {
    setLoading(true);
    setError(null);
      try {
        const response = await axios.post('http://localhost:8080/api/email/generate', {
          emailContent,
          tone
        });
        setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));

      } catch (error) {
        console.error("Error generating reply:", error);
        setError("Failed to generate reply. Please try again.");
        
      }finally{
        setLoading(false);
    
      }
    };
const handleCopy = async () => {
  try {
    const textToCopy =
      typeof generatedReply === 'object' && generatedReply.reply
        ? generatedReply.reply
        : generatedReply;

    await navigator.clipboard.writeText(textToCopy);

    Swal.fire({
      icon: 'success',
      title: 'Copied!',
      text: 'The generated reply has been copied to your clipboard.',
      showConfirmButton: false,
      timer: 4000,
    });
  } catch (err) {
    console.error('Clipboard copy failed:', err);

    Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Failed to copy to clipboard.',
    });
  }
};



  return (
    <>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Email Reply Generator
        </Typography>
        <Box sx={{ mx: 3 }}>
          <TextField
            value={emailContent || ""}
            onChange={(e) => setEmailContent(e.target.value)}
            multiline
            rows={6}
            variant="outlined"
            label="original email content write here"
            sx={{ mb: 2 }}
            fullWidth
          />

          <FormControl fullWidth sx={{ mb: 4 }}>
            <InputLabel>Tone</InputLabel>
            <Select
              label={"tone-label"}
              value={tone || ""}
              onChange={(e) => setTone(e.target.value)}
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="casual">Casual</MenuItem>
              <MenuItem value="friendly">Friendly</MenuItem>
              <MenuItem value="professional">Professional</MenuItem>
            </Select>
          </FormControl>

          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!emailContent || loading || !tone}
            fullWidth
          >
            {loading ? <CircularProgress size={24} /> : "Generate Reply"}
          </Button>
        </Box>

        {error && (
          <Typography color="error" variant="body1" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        {generatedReply && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Generated Reply
            </Typography>
            <TextField
              value={generatedReply}
              multiline
              rows={6}
              variant="outlined"
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={handleCopy}
            >
              Copy to Clipboard
            </Button>
          </Box>
        )}
      </Container>
    </>
  );
}

export default App
