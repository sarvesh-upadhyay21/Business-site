import React from 'react';
import { useTranslation } from 'react-i18next';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

const TopNav = ({ setCurrentLanguage }) => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = React.useState(i18n.language);

    const handleLanguageChange = (event) => {
        const lang = event.target.value;
        i18n.changeLanguage(lang);
        setLanguage(lang);
        setCurrentLanguage(lang); // Update the App's state
    };

    return (
        <AppBar position="static" style={{ backgroundColor: '#FFD700' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {t('government')}
                </Typography>
                <Box sx={{ minWidth: 120 }}>
                    <Select
                        value={language}
                        onChange={handleLanguageChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Language Selector' }}
                    >
                        <MenuItem value="hi">Hindi</MenuItem>
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="mr">Marathi</MenuItem>
                    </Select>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default TopNav;
