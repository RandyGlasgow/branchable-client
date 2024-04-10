import { Button } from '@components/core/Button';
import { Card } from '@components/core/card/Card';
import { CardContent } from '@components/core/card/CardContetn';
import { CardHeader } from '@components/core/card/CardHeader';
import { PlusIcon } from '@radix-ui/react-icons';

export const OrganizationGrid = () => {
  return (
    <Card>
      <CardContent>
        <CardHeader
          left={<h2>Organizations</h2>}
          right={
            <Button className="p-0 py-2">
              <PlusIcon />
            </Button>
          }
        />
      </CardContent>
    </Card>
  );
};
