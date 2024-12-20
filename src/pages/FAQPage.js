import React, { useState, useContext, useEffect } from 'react';
import { Typography, Stack, Accordion, AccordionSummary, AccordionDetails, useTheme } from '@mui/material';
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

    useEffect(() => {
      setFaqData(translations[language].faqPage.questions);
      setTitle(translations[language].faqPage.title);
      }, [language]); 

  return (
    <Stack alignItems="center" padding={2} spacing={8}>
      <Typography width={'60%'} variant="h4" sx={{ fontSize: { xs: '2rem', sm: '5rem', md: '2.5em' } }}>
        {title}
      </Typography>
      <Stack width="60%" spacing={0}>
        {faqData.map((faq, index) => (
          <Accordion sx={{backgroundColor: 'grey'}} key={index}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
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
  );
};

export default FAQPage;
