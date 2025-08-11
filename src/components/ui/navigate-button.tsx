import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NavigateButton = ({
  children,
  path
}: {
  children: React.ReactNode;
  path: string;
}) => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(path)} variant="outline">
      {children}
    </Button>
  );
};

export default NavigateButton;
