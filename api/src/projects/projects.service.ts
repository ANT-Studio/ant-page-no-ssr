import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Project} from "./entities/project.entity";

@Injectable()
export class ProjectsService {
  constructor(@InjectRepository(Project) private projectsRepository: Repository<Project>) {
  }

  create(createProjectDto: CreateProjectDto) {
    return this.projectsRepository.save(createProjectDto);
  }

  async findAll() {
    return await this.projectsRepository.find({});
  }

  async findOne(id: number) {
    return await this.projectsRepository.findOne(id);
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    return await this.projectsRepository.update(id, updateProjectDto);
  }

  async remove(id: number) {
    return await this.projectsRepository.delete(id);
  }
}
