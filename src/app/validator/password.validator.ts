import { AbstractControl,ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordvalidation:ValidatorFn=(formg : AbstractControl):ValidationErrors|null=>{
    let passctrl = formg.get('pass');
    let cnfrmPassctrl = formg.get('cnfrmPass');
    if(!passctrl||!cnfrmPassctrl||!passctrl.value||!cnfrmPassctrl.value)
    return null
    let err={'unmatchedPassword':{'pass':passctrl?.value, 'confirm':cnfrmPassctrl?.value}}
    return (passctrl?.value==cnfrmPassctrl?.value)?null:err
}



export function passwordvalidationpar(passParam:boolean=false):ValidatorFn{
    return (control:AbstractControl)  :ValidationErrors|null=>{
    let passctrl = control.get('pass');
    let cnfrmPassctrl = control.get('cnfrmPass');
    if(!passctrl||!cnfrmPassctrl||!passctrl.value||!cnfrmPassctrl.value)
    return null;
    
    let err={'unmatchedPassword':{'pass':passctrl?.value, 'confirm':cnfrmPassctrl?.value}}
    return (passctrl?.value==cnfrmPassctrl?.value)?null:err
}

}