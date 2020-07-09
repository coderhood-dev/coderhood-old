import Box, { BoxProps } from '@material-ui/core/Box';

interface ComponentProps {
  direction: "column" | "row";
  center?: boolean;
}

type Props = BoxProps & ComponentProps;

const Flex: React.ComponentType<Props> = ({
  children,
  direction,
  center,
  ...props
}) => (
    <Box
      display="flex"
      flexDirection={direction}
      justifyContent={center ? 'center' : 'flex-start'}
      alignItems={center ? 'center' : 'flex-start'}
      width="100%"
      {...props}
    >
      {children}
    </Box>
  );

export default Flex;
