import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  post_code: string;

  @Column()
  country: string;

  @ManyToOne(() => User, (user) => user.addresses)
  user: User; // Associate with User
}
