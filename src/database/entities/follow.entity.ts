import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { CreateUpdateModel } from './models/create-update.model';
import { UserEntity } from './user.entity';

@Entity('follow')
export class FollowEntity extends CreateUpdateModel {
  @Column()
  follower_id: string;

  @Column()
  following_id: string;

  @ManyToOne(() => UserEntity, (entity) => entity.follows)
  @JoinColumn({ name: 'follower_id' })
  @JoinColumn({ name: 'following_id' })
  user?: UserEntity;
}
