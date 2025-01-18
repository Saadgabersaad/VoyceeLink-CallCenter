import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Typography, Chip } from '@mui/material';
import { Flex } from 'modules/core/components/flex';
import { styles } from '../consts/styles';

export type DetailBoxProps = {
    labelValues: { label: string; value:React.ReactNode; icon?: React.ReactNode}[];
};

const DetailBox: React.FC<DetailBoxProps> = ({ labelValues }) => {

    const getLanguageStyle = (language: string): React.CSSProperties =>
        styles.language[language] || { color: "#6C757D" };

    const renderLanguage = (language: string) => {
        const [lang1, lang2] = language.split(" - ");
        return (
            <>
                <span style={getLanguageStyle(lang1)}>{lang1}</span> -{" "}
                <span style={getLanguageStyle(lang2)}>{lang2}</span>
            </>
        );
    };

    return (
        <Box
            sx={{
                width: '260px',
                display: 'flex',
                fontSize: '12px',
                border: '1px solid #D6D6D6',
                borderRadius: '5px',
            }}
        >
            <Flex
                color="#616161"
                bgcolor="#F7F7F7"
                fontSize={12}
                flexDirection="column"
                p={1.5}
                justifyContent="center"
                gap={2}
            >
                {labelValues.map((item, index) => (
                    <Typography key={index} fontSize={12}>
                        {item.label}
                    </Typography>
                ))}
            </Flex>

            <Divider orientation="vertical" flexItem />

            <Flex
                fontSize={12}
                flexDirection="column"
                p={1.5}
                justifyContent="center"
                gap={2}
                width="fit-content"
                color="black"
            >
                {labelValues.map((item, index) => (
                    <Box
                        key={index}
                        fontSize={12}
                        sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                    >
                        {
                            item.label === 'Language'&& typeof item.value === 'string'
                                ?  <> {renderLanguage(item.value)} </>
                                : <> {item.value} {item.icon} </>
                        }
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default DetailBox;
