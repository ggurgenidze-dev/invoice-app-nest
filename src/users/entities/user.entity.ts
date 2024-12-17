import { Address } from 'src/addresses/entities/address.entity';
import { Invoice } from 'src/invoices/entities/invoice.entity';
import { Item } from 'src/items/entities/item.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: 'user' })
  role: string;

  @Column()
  password: string;

  @OneToMany(() => Invoice, (invoice) => invoice.user)
  invoices: Invoice[];

  @OneToMany(() => Item, (item) => item.user)
  items: Item[];

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];
}
