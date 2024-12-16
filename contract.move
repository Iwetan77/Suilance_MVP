module 0xYourModule::PaymentProcessor {
    use std::string;
    use std::address;
    use sui::coin::{Coin, transfer};
    use sui::event::emit;

    // Define an event to track payments
    struct PaymentEvent has copy, drop, store {
        payer: address,
        amount: u64,
        purpose: string,
    }

    public fun process_payment(
        payer: &signer, // The user making the payment
        amount: u64,    // The amount of SUI in Mist (1 SUI = 1e6 Mist)
        purpose: string // Description of the payment
    ) {
        // Ensure the payment amount is valid
        assert!(amount > 0, "Payment amount must be greater than zero");

        // Emit a payment event
        emit PaymentEvent {
            payer: signer::address_of(payer),
            amount: amount,
            purpose: purpose,
        };

        // Transfer SUI to the contract owner
        transfer(
            payer,
            0xYourOwnerAddress,
            amount
        );
    }
}
