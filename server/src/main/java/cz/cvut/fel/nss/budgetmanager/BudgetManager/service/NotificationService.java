package cz.cvut.fel.nss.budgetmanager.BudgetManager.service;

import cz.cvut.fel.nss.budgetmanager.BudgetManager.model.Wallet;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {

    public void sendBudgetOverlimitNotification(Wallet wallet) {
        // Implement the logic to send a notification when the budget limit is exceeded
        // This could be sending an email, SMS, or any other form of notification


        //пока что просто выводим надо придумать логгер
        System.out.println("Budget over limit notification sent for wallet with ID: " + wallet.getWalletId());
    }

}
