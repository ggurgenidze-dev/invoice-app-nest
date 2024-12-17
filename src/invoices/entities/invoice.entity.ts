import { Item } from 'src/items/entities/item.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @Column({ type: 'date' })
  payment_due: Date;

  @Column()
  description: string;

  @Column()
  payment_terms: number;

  @ManyToOne(() => User, (user) => user.invoices)
  user: User;

  @Column()
  status: string;

  @Column('decimal')
  total: number;

  @OneToMany(() => Item, (item) => item.invoice)
  items: Item[];
}
