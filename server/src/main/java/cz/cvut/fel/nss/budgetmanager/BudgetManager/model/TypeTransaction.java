package cz.cvut.fel.nss.budgetmanager.BudgetManager.model;

public enum TypeTransaction {
    INCOME("INCOME"),
    EXPENSE("EXPENSE");
    private String type;

    TypeTransaction(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    @Override
    public String toString() {
        return type;
    }
}
