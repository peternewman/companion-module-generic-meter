import { type SomeCompanionConfigField } from '@companion-module/base'

export interface ModuleConfig {}

export function GetConfigFields(): SomeCompanionConfigField[] {
	return [
		{
			type: 'static-text',
			id: 'info',
			width: 12,
			label: 'Information',
			value:
				'This module generates dB meter images from variable values as feedbacks. Please see the help for further setup advice.',
		},
	]
}
