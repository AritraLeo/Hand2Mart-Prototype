import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const Contents = [
    {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicin', description: 'elit.Veniam excepturi quasi quae suscipit, consectetur maiores voluptatem.Architecto, in pariatur.Cumque, recusandae adipisci.Porro, doloremque consequatur nisi officiis consequuntur animi molestias!'
    },
    { title: 'Faq1', description: 'lorem....' },
    { title: 'Faq1', description: 'lorem....' },
    { title: 'Faq1', description: 'lorem....' },
]


export default function FAQList() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
        // setExpanded(panel);
    };

    return (
        <>
            <Card
                sx={{
                    maxWidth: 1500,
                }}
            >


                {
                    Contents.map((content, index) => (
                        <>
                            <Accordion
                                sx={{
                                    backgroundColor: '#222222',
                                    color: 'white'
                                }}
                                expanded={expanded === `panel1${index}`} onChange={handleChange(`panel1${index}`)}>
                                <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
                                    <Typography>{content.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {content.description}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </>
                    )
                    )
                }


            </Card>
        </>
    );
}
