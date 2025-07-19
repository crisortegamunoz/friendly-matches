import { Test, TestingModule } from '@nestjs/testing';
import { TeamMembershipsController } from './team-memberships.controller';

describe('TeamMembershipsController', () => {
  let controller: TeamMembershipsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeamMembershipsController],
    }).compile();

    controller = module.get<TeamMembershipsController>(TeamMembershipsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
