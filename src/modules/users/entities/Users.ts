import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  @Exclude()
  mobile: string;

  @Column()
  @Exclude()
  fbid: string;

  @Column()
  @Exclude()
  gcm_token: string;

  @Column()
  status: string;

  @Column()
  @Exclude()
  latitude: string;

  @Column()
  @Exclude()
  longitude: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
