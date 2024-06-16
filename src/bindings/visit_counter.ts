import * as ex from "@completium/dapp-ts";
import * as att from "@completium/archetype-ts-types";
const register_arg_to_mich = (): att.Micheline => {
    return att.unit_mich;
}
const visit_arg_to_mich = (): att.Micheline => {
    return att.unit_mich;
}
const withdraw_arg_to_mich = (): att.Micheline => {
    return att.unit_mich;
}
export class Visit_counter {
    address: string | undefined;
    constructor(address: string | undefined = undefined) {
        this.address = address;
    }
    get_address(): att.Address {
        if (undefined != this.address) {
            return new att.Address(this.address);
        }
        throw new Error("Contract not initialised");
    }
    async get_balance(): Promise<att.Tez> {
        if (null != this.address) {
            return await ex.get_balance(new att.Address(this.address));
        }
        throw new Error("Contract not initialised");
    }
    async register(params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "register", register_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async visit(params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "visit", visit_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async withdraw(params: Partial<ex.Parameters>): Promise<att.CallResult> {
        if (this.address != undefined) {
            return await ex.call(this.address, "withdraw", withdraw_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_register_param(params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "register", register_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_visit_param(params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "visit", visit_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_withdraw_param(params: Partial<ex.Parameters>): Promise<att.CallParameter> {
        if (this.address != undefined) {
            return await ex.get_call_param(this.address, "withdraw", withdraw_arg_to_mich(), params);
        }
        throw new Error("Contract not initialised");
    }
    async get_owner(): Promise<att.Address> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Address.from_mich((storage as att.Mpair).args[0]);
        }
        throw new Error("Contract not initialised");
    }
    async get_user_visits(): Promise<Array<[
        att.Address,
        att.Nat
    ]>> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.mich_to_map((storage as att.Mpair).args[1], (x, y) => [att.Address.from_mich(x), att.Nat.from_mich(y)]);
        }
        throw new Error("Contract not initialised");
    }
    async get_last_visit(): Promise<Array<[
        att.Address,
        Date
    ]>> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.mich_to_map((storage as att.Mpair).args[2], (x, y) => [att.Address.from_mich(x), att.mich_to_date(y)]);
        }
        throw new Error("Contract not initialised");
    }
    async get_p(): Promise<att.Nat> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.Nat.from_mich((storage as att.Mpair).args[3]);
        }
        throw new Error("Contract not initialised");
    }
    async get_d(): Promise<Date> {
        if (this.address != undefined) {
            const storage = await ex.get_raw_storage(this.address);
            return att.mich_to_date((storage as att.Mpair).args[4]);
        }
        throw new Error("Contract not initialised");
    }
    errors = {
        ONLY_OWNER_CAN_WITHDRAW: att.string_to_mich("\"ONLY_OWNER_CAN_WITHDRAW\""),
        r3: att.string_to_mich("\"MUST_WAIT_BEFORE_VISIT\""),
        r2: att.string_to_mich("\"MUST_PAY_1TZ_TO_VISIT\""),
        r1: att.string_to_mich("\"MUST_BE_REGISTERED_BEFORE\""),
        ONLY_THE_CALLER_CAN_TRIGGER_THIS_ENTRYPOINT: att.string_to_mich("\"ONLY_THE_CALLER_CAN_TRIGGER_THIS_ENTRYPOINT\""),
        c1: att.string_to_mich("\"ALREADY_REGISTERED\"")
    };
}
export const visit_counter = new Visit_counter();

