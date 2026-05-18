/**
 * @amlplugins/google-cloud-kms
 *
 * Thin namespaced re-export of the native @google-cloud/kms SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Cloud KMS.
 */

import * as _sdk from "@google-cloud/kms";
export * from "@google-cloud/kms";
export { _sdk as sdk };
export default _sdk;
