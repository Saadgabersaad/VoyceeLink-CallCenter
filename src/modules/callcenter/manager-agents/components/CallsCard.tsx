import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const cards = [
    {
        id: 1,
        title: 'Answered Calls',
        count: '125 ',
        percentage: '(92%)',
        style: { color: 'black ',border:'1px solid #D6D6D6' },
    },
    {
        id: 2,
        title: 'Missed Calls',
        count: '2 ',
        percentage: '(8%)',
        style: { color: '#FF2D55',border:'1px solid #FF2D55' },
    },
    {
        id: 3,
        title: 'Score',
        count: '4.8',
        percentage: '',
        style: { color: '#36976E',border:'1px solid #36976E' },
    },
];

function SelectActionCard() {

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                gap: 2,
            }}
        >
            {cards.map((card) => (
                <Card key={card.id} sx={{borderRadius: '10px',boxShadow:'none'}}>
                    <CardActionArea sx={{width: '150px'}}>
                        <CardContent sx={{ height: '100%', border:card.style.border,borderRadius: '10px' ,p:1.5}}>
                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                {card.title}
                            </Typography>
                            <Typography sx={{ color: card.style.color,display:'flex',alignItems:'center',gap:1}} variant="h6" fontWeight="bold">
                                {card.count}<Typography fontWeight={'normal'} fontSize={'14px'}>{card.percentage}</Typography>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
    );
}

export default SelectActionCard;
