import {CompanionActions} from '../../../instance_skel_types'
import {DPT_SELECT_FIELD, DPT_SUBTYPE_SELECT_FIELDS, GROUP_ADDR_FIELD} from './Fields'

export const ACTIONS: CompanionActions = {
	send: {
		label: 'Send Telegram to Group Address',
		options: [
			GROUP_ADDR_FIELD,
			DPT_SELECT_FIELD,
			...DPT_SUBTYPE_SELECT_FIELDS,
			{ // TODO make DPT dependant
				type: 'textwithvariables',
				label: 'Value to Send',
				id: 'value',
				default: '',
			}
		],
	}
}
