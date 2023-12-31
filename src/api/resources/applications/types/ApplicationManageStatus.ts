/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Amethyst from "../../..";

export interface ApplicationManageStatus {
    /** The task result of syncing the player against luckperms */
    syncedUser: Amethyst.TaskResult;
    /** The task result of syncing the player's discord role */
    syncedRole: Amethyst.TaskResult;
}
