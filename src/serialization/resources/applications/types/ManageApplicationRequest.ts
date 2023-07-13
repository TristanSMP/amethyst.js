/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Amethyst from "../../../../api";
import * as core from "../../../../core";

export const ManageApplicationRequest: core.serialization.ObjectSchema<
    serializers.ManageApplicationRequest.Raw,
    Amethyst.ManageApplicationRequest
> = core.serialization.object({
    player: core.serialization.lazy(async () => (await import("../../..")).PlayerId),
    action: core.serialization.lazy(async () => (await import("../../..")).ApplicationStatus),
});

export declare namespace ManageApplicationRequest {
    interface Raw {
        player: serializers.PlayerId.Raw;
        action: serializers.ApplicationStatus.Raw;
    }
}
