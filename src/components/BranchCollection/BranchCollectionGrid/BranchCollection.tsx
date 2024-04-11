"use client";
import { Card } from '@components/core/card/Card';
import { CardContent } from '@components/core/card/CardContetn';
import { CardHeader } from '@components/core/card/CardHeader';

import { CreateNewCollectionDialog } from '../CreateNewCollectionDialog/CreateNewCollectionDialog';

export const BranchCollection = () => {
  return (
    <Card>
      <CardContent>
        <CardHeader
          left={<h2>Organizations</h2>}
          right={<CreateNewCollectionDialog />}
        />
      </CardContent>
    </Card>
  );
};
