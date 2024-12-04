
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import {usePathname} from "next/navigation";
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";
import {Flex} from "modules/core/components/flex";


export default function FilterBtn() {



    const customerOptions = [

        {label:'Client Type',backgroundColor:'',color:''},
        { label:'(Lcp)',backgroundColor:'#EEF5F0',color:'#589E67'},
        {label:'Customer Service',backgroundColor:'#EDF2FE ',color:'#4976F4'},
        {label:'Technical Support',backgroundColor:'#F7F7E8',color:'#B1AB1D'},
        {label:'Sales',backgroundColor:'#F4EDF7',color:'#954BAF'}];
    const leadsOptions = [

        {label:'Filters',backgroundColor:'',color:'#424242'},
        { label:'Lost',backgroundColor:'#EEF5F0',color:'#589E67'},
        {label:'Qualified',backgroundColor:'#F7F7E8',color:'#B1AB1D'},
        {label:'Contacted',backgroundColor:'#F4EDF7',color:'#954BAF'}];



    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex].label}`);

    };

    const handleMenuItemClick = (
        index: number,
        value: string,

    ) => {
        setSelectedIndex(index);
        setOpen(false);
        console.info(`You clicked ${options[selectedIndex].label}`);
      //  onFilters(value)

    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    const pathname = usePathname();
    const options = pathname === "/customers" ? customerOptions : leadsOptions;


    return (
        <React.Fragment>
            <ButtonGroup

                sx={{border:"1px solid lightGray",borderRadius:'5',bgcolor: 'white',color:'#424242'}}
                //@ts-expect-error  is necessary
                variant=""
                ref={anchorRef}
                aria-label="Button group with a nested menu"
            >
          <Flex justifyContent="space-between" alignItems="center">
              <Button
                  sx={{width:"220px",display:"flex",justifyContent:"space-between",alignItems:"center",paddingY:'0px'}}
                  size="medium"
                  aria-controls={open ? 'split-button-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  onClick={handleToggle}
              >
                  <FilterListIcon />
                  <Button
                      sx={{fontSize:'16px'}}
                      style={{color:selectedIndex === selectedIndex ? options[selectedIndex].color : 'black'}}
                      size='medium'
                      onClick={handleClick}>{options[selectedIndex].label}

                  </Button>
              <ArrowDropDownIcon/>
              </Button>
          </Flex>

            </ButtonGroup>




            <Popper
                sx={{ zIndex: 1 }}

                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >

                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    sx={{padding:'8px',borderRadius:'5px'}}
                                    id="split-button-menu" autoFocusItem>
                                    { options.map((option, index) => (
                                        <MenuItem
                                            className='w-fit'
                                            key={option.label}
                                            sx={{borderRadius:'5px',
                                                marginY:'5px',
                                                backgroundColor: option.backgroundColor,
                                                color:option.color,

                                            }}
                                            selected={index === selectedIndex}
                                            onClick={() => handleMenuItemClick( index,option.label)}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    )) }

                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </React.Fragment>
    );
}