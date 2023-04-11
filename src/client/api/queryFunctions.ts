import { apiClient } from './client'
import { endpoints } from './config'
import {
  BlockSchema,
  ConfigSchema,
  StatisticsSchema,
  ValidatorSchema,
  onChainProofSchema,
  registeredRelaysSchema,
} from './schemas'
import { convertKeysToCamelCase } from '@/utils/case'

export const fetchConfig = async () => {
  const response = await apiClient.get(endpoints.config)
  return ConfigSchema.parse(convertKeysToCamelCase(response.data))
}

export const fetchValidatorsByDepositor = async (
  address: `0x${string}` | undefined
) => {
  const response = await apiClient.get(
    endpoints.memoryValidators(address || '0x0')
  )
  return ValidatorSchema.array().parse(convertKeysToCamelCase(response.data))
}

export const fetchValidatorByIndex = async (index: string) => {
  const response = await apiClient.get(endpoints.memoryValidator(index))
  return ValidatorSchema.parse(convertKeysToCamelCase(response.data))
}

export const fetchProposedBlocks = async () => {
  const response = await apiClient.get(endpoints.proposedBlocks)
  return BlockSchema.array().parse(convertKeysToCamelCase(response.data))
}

export const fetchStatistics = async () => {
  const response = await apiClient.get(endpoints.statistics)
  return StatisticsSchema.parse(convertKeysToCamelCase(response.data))
}

export const fetchOnChainProof = async (address: `0x${string}`) => {
  const response = await apiClient.get(endpoints.onchainProof(address))
  return onChainProofSchema.parse(convertKeysToCamelCase(response.data))
}

export const fetchValidatorRegisteredRelays = async (
  validatorKey: `0x${string}`
) => {
  const response = await apiClient.get(endpoints.registeredRelays(validatorKey))
  return registeredRelaysSchema.parse(convertKeysToCamelCase(response.data))
}
