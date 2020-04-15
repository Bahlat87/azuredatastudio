/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Event } from 'vs/base/common/event';
import { createDecorator } from 'vs/platform/instantiation/common/instantiation';

export const IPreviewEnabledService = createDecorator<IPreviewEnabledService>('previewEnabledService');

export interface IPreviewEnabledService {
	previewFeaturesEnabled: boolean;
	onPreviewEnabled: Event<void>;

	fireOnPreviewEnabled(): void;
}
