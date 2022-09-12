import { Body, Controller, Get, Post } from '@nestjs/common';
import ColorEngineRequest from './engine-parts/interfaces/color-engine-request.interface';
import RulesEngineRequest from './engine-parts/interfaces/rules-engine-request.interface';
import { RulesEngineService } from './rules-engine.service';

@Controller('rules-engine')
export class RulesEngineController {
  constructor(private readonly rulesEngineService: RulesEngineService) {}

  @Get()
  async getAllRules(): Promise<string[]> {
    return await this.rulesEngineService.getAllRules();
  }

  @Post('/color')
  async getColor(@Body() request: ColorEngineRequest): Promise<string> {
    return await this.rulesEngineService.decideColor(request.name);
  }

  @Post('/wi-home-visit-eligibility')
  async decideWIHomeVisitEligibility(
    @Body() rulesEngineRequest: RulesEngineRequest[],
  ): Promise<{ name: string; eligible: boolean }[]> {
    return await this.rulesEngineService.decideWIHomeVisitEligibility(
      rulesEngineRequest,
    );
  }
}
