import { apiClient } from './client'
import { endpoints } from './config'
import { StatisticsSchema } from './schemas'
import { convertKeysToCamelCase } from '@/utils/case'

export const fetchStatistics = async () => {
  const response = await apiClient.get(endpoints.statistics)

  return StatisticsSchema.parse(convertKeysToCamelCase(response.data))
}
