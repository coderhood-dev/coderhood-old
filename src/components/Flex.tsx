import Box, { BoxProps } from '@material-ui/core/Box';

interface ComponentProps {
  row?: boolean;
  center?: boolean;
}

type Props = BoxProps & ComponentProps;

const Flex: React.ComponentType<Props> = ({
  children,
  row,
  center,
  ...props
}) => (
  <Box
    display="flex"
    flexDirection={row ? 'row' : 'column'}
    justifyContent={center ? 'center' : 'flex-start'}
    alignItems={center ? 'center' : 'flex-start'}
    width="100%"
    {...props}
  >
    {children}
  </Box>
);

export default Flex;
