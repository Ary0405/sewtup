# Database Stuff

# Triggers
1. after_bid_accept
```sql
AFTER UPDATE ON "Bid"
FOR EACH ROW
EXECUTE PROCEDURE after_bid_accept();
```
```sql
BEGIN
    IF NEW.status = 'ACCEPTED' THEN
        UPDATE "Order"
        SET
            "designerId" = NEW."userId",
            "status" = 'DESIGNING',
            "finalPrice" = NEW.amount
        WHERE id = NEW."orderId";
    END IF;

    RETURN NEW;
END;
```

2. after_bid_update
```sql
AFTER UPDATE ON "Bid"
FOR EACH ROW
EXECUTE PROCEDURE after_bid_update();
```
```sql
BEGIN
    IF NEW.status = 'ACCEPTED' THEN
        UPDATE "Bid"
        SET status = 'REJECTED'
        where "orderId" = new."orderId" and id <> new.id;
    END IF;
    RETURN NEW;
END;
```

3.before_order_delete
```sql
BEFORE DELETE ON "Order"
FOR EACH ROW
EXECUTE PROCEDURE before_order_delete();
```
```sql
BEGIN
    DELETE FROM "Bid"
    WHERE "orderId" = old.id;
    RETURN old;
END;
```


