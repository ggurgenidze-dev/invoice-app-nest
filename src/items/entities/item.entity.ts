import { Invoice } from 'src/invoices/entities/invoice.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  quantity: number;

  @Column('decimal')
  price: number;

  @Column('decimal')
  total: number;

  @ManyToOne(() => Invoice, (invoice) => invoice.items)
  invoice: Invoice;

  @ManyToOne(() => User, (user) => user.items)
  user: User;
}
