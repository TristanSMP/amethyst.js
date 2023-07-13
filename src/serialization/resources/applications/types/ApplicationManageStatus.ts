/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Amethyst from "../../../../api";
import * as core from "../../../../core";

export const ApplicationManageStatus: core.serialization.ObjectSchema<
    serializers.ApplicationManageStatus.Raw,
    Amethyst.ApplicationManageStatus
> = core.serialization.object({
    syncedUser: core.serialization.lazyObject(async () => (await import("../../..")).TaskResult),
    syncedRole: core.serialization.lazyObject(async () => (await import("../../..")).TaskResult),
});

export declare namespace ApplicationManageStatus {
    interface Raw {
        syncedUser: serializers.TaskResult.Raw;
        syncedRole: serializers.TaskResult.Raw;
    }
}
