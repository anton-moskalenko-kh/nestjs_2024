import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { LikeEntity } from './like.entity';
import { CreateUpdateModel } from './models/create-update.model';
import { TagEntity } from './tag.entity';
import { UserEntity } from './user.entity';
import { CommentEntity } from "./comment.entity";

@Entity('articles')
export class ArticleEntity extends CreateUpdateModel {
  @Column('text')
  title: string;

  @Column('text')
  description: string;

  @Column('text')
  body: string;

  @Column()
  user_id: string;

  @ManyToOne(() => UserEntity, (entity) => entity.articles)
  @JoinColumn({ name: 'user_id' })
  user?: UserEntity;

  @ManyToMany(() => TagEntity, (entity) => entity.articles)
  @JoinTable()
  tags?: TagEntity[];

  @OneToMany(() => LikeEntity, (entity) => entity.article)
  likes?: LikeEntity[];

  @OneToMany(() => CommentEntity, (entity) => entity.article)
  comments?: CommentEntity[];
}
