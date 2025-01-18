import React from 'react'
import { Flex } from '../flex'
import { Button } from '../button'
import { Add, CloudUpload, Download } from '@mui/icons-material'
import { useBoolean } from 'modules/core/hooks/use-boolean'

const buttonStyle = { bgcolor: 'grey.50', color: 'grey.900' }
type Props = {
  disableDownload?: boolean;
  disableImport?: boolean;
  buttonText: string;
  mainModal?: React.ReactNode;
  buttons?: Array<'download' | 'import' | 'add'>; // Specify which buttons to display
};

export const HeadingActions: React.FC<Props> = ({
                                                  mainModal,
                                                  buttonText,
                                                  disableDownload,
                                                  disableImport,
                                                  buttons = ['download', 'import', 'add'], // Default: show all buttons
                                                }) => {
  const [open, onOpen, onClose] = useBoolean();

  return (
      <Flex alignItems="start" gap={1.7}>
        {buttons.includes('download') && !disableDownload && (
            <Button startIcon={<Download />} variant="contained" sx={buttonStyle}>
              Download
            </Button>
        )}

        {buttons.includes('import') && !disableImport && (
            <Button startIcon={<CloudUpload />} variant="contained" sx={buttonStyle}>
              Import
            </Button>
        )}

        {buttons.includes('add') && buttonText && (
            <Button startIcon={<Add />} variant="contained" onClick={onOpen}>
              {buttonText}
            </Button>
        )}

        {open && mainModal && React.cloneElement(mainModal as React.ReactElement, { open, onClose })}
      </Flex>
  );
};
