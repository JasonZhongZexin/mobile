import {
    NavigatedData,
    Page,
} from 'tns-core-modules/ui/page';

import { SettingsViewModel } from './settings-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = args.object as Page;
    page.bindingContext = new SettingsViewModel(page);
}