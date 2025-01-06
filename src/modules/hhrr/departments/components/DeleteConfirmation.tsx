import { Typography } from '@mui/material'
import { Flex } from 'modules/core/components/flex'
import { DialogProps, FormActions } from 'modules/core/components/FormDialog'
import Countdown from 'modules/core/components/Countdown'
import { useBoolean } from 'modules/core/hooks/use-boolean'

type Props = DialogProps & {
  loading: boolean
}

export default function DeleteConfirmation({ onClose, loading }: Props) {
  const [countdownEnd, setCountdownEnd] = useBoolean()

  const onCountdownEnd = () => {
    setCountdownEnd()
  }

  return <>
    <Typography color='error' sx={{ mx: 3, mt: 2, fontWeight: '500' }}>
      Are you sure you would like to delete this Department?
    </Typography>
    <Typography color='error' sx={{ mx: 3, fontWeight: '500' }}>
      This action can't be undone
    </Typography>
    <Flex display='flex' justifyContent='center' mt={2} py={1}>
      <Countdown onCountdownEnd={onCountdownEnd} />
    </Flex>
    <FormActions
      deleteButton
      loading={loading}
      onClose={onClose}
      isDisabled={!countdownEnd}
      buttonText='Delete'
    />
  </>
}


