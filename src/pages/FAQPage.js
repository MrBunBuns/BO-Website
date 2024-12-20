import React, { useState, useContext, useEffect } from 'react';
import { Typography, Stack, Accordion, AccordionSummary, AccordionDetails, useTheme, Container, useMediaQuery } from '@mui/material';
import { LanguageContext } from '../contexts/LanguageContext';
import en from '../assests/languages/en.json'; // English translations
import es from '../assests/languages/es.json'; // Spanish translations
import { ExpandMore } from '@mui/icons-material';

const translations = { en, es };

const FAQPage = () => {
  const theme = useTheme();
  const { language } = useContext(LanguageContext);

  const [faqData, setFaqData] = useState(translations[language].faqPage.questions);
  const [title, setTitle] = useState(translations[language].faqPage.title);
  
  const isMobile = !useMediaQuery(theme.breakpoints.down('sm') || theme.breakpoints.down('xs'));
  const isUltraWide = useMediaQuery('(min-width: 2200px)');
  const contained = isUltraWide ? (isMobile ? 'lg' : 'sm') : false;

    useEffect(() => {
      setFaqData(translations[language].faqPage.questions);
      setTitle(translations[language].faqPage.title);
      }, [language]); 

  return (
    <Container maxWidth={contained}>
      <Stack alignItems="center" padding={2} spacing={8}>
        <Typography variant="h4" sx={{ fontSize: { xs: '2rem', sm: '5rem', md: '2.5em' } }}>
          {title}
        </Typography>
        <Stack width="100%" spacing={.5}>
          {faqData.map((faq, index) => (
            <Accordion sx={{backgroundColor: theme.palette.background.alternate}} key={index}>
              <AccordionSummary
                expandIcon={<ExpandMore style={{ color: "white" }}/>}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="h6">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Stack>

    </Container>
    
  );
};

export default FAQPage;
