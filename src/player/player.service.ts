import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { PlayerCreateDTO } from './dtos/create-player.input';
import { PlayerEntity } from './entities/player.entity';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(PlayerEntity)
    private playerRepository: Repository<PlayerEntity>,
  ) {}

  findAll(): Observable<PlayerEntity[]> {
    return from(this.playerRepository.find({ relations: ['results'] }));
  }

  findOne(id: number): Observable<PlayerEntity> {
    return from(this.playerRepository.findOne(id, { relations: ['results'] }));
  }

  create(player: PlayerCreateDTO): Observable<PlayerEntity> {
    const playerEntity = this.playerRepository.create(player);
    return from(this.playerRepository.save(playerEntity));
  }
}
