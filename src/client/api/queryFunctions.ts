import { apiClient } from './client'
import { endpoints } from './config'
import { BlockSchema, StatisticsSchema, ValidatorSchema } from './schemas'
import { convertKeysToCamelCase } from '@/utils/case'

export const fetchValidatorsByDepositor = async (
  address: `0x${string}` | undefined
) => {
  const response = await apiClient.get(endpoints.validators(address || '0x0'))
  return ValidatorSchema.array().parse(convertKeysToCamelCase(response.data))
}

export const fetchProposedBlocks = async () => {
  const response = await apiClient.get(endpoints.proposedBlocks)
  return BlockSchema.array().parse(convertKeysToCamelCase(response.data))
}

export const fetchStatistics = async () => {
  const response = await apiClient.get(endpoints.statistics)

  return StatisticsSchema.parse(convertKeysToCamelCase(response.data))
}
