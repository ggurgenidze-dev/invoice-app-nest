import { DataSource } from 'typeorm';
import { Address } from 'src/addresses/entities/address.entity';
import { User } from 'src/users/entities/user.entity';
import { Item } from 'src/items/entities/item.entity';
import { Invoice } from 'src/invoices/entities/invoice.entity';

const dataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [Address, User, Item, Invoice],
  synchronize: true,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  //   extra: { connectionLimit: 10 },
});

export default dataSource;

export const dataSourceOptions = dataSource.options;
