import React, { Suspense } from 'react';

import { importRemote } from '@module-federation/utilities';
import { NavDropdown } from './menu-components';

const EntitiesMenuItems = React.lazy(() => import('app/entities/menu').catch(() => import('app/shared/error/error-loading')));

const ProductEntitiesMenuItems = React.lazy(async () =>
  importRemote<any>({
    url: `./services/product`,
    scope: 'product',
    module: './entities-menu',
  }).catch(() => import('app/shared/error/error-loading')),
);

export const EntitiesMenu = () => (
  <NavDropdown icon="th-list" name="Entities" id="entity-menu" data-cy="entity" style={{ maxHeight: '80vh', overflow: 'auto' }}>
    <Suspense fallback={<div>loading...</div>}>
      <EntitiesMenuItems />
    </Suspense>
    <Suspense fallback={<div>loading...</div>}>
      <ProductEntitiesMenuItems />
    </Suspense>
  </NavDropdown>
);
