`# Database Stuff

# Triggers
1. after_bid_accept
```sql
CREATE OR REPLACE FUNCTION after_bid_accept()
RETURNS TRIGGER AS $$
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
$$ LANGUAGE plpgsql;

CREATE TRIGGER after_bid_accept_trigger
AFTER UPDATE ON "Bid"
FOR EACH ROW
EXECUTE FUNCTION after_bid_accept();
```

2. after_bid_update
```sql
CREATE OR REPLACE FUNCTION after_bid_update()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.status = 'ACCEPTED' THEN
        UPDATE "Bid"
        SET status = 'REJECTED'
        WHERE "orderId" = NEW."orderId" AND id <> NEW.id;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER after_bid_update_trigger
AFTER UPDATE ON "Bid"
FOR EACH ROW
EXECUTE FUNCTION after_bid_update();
```

3.before_order_delete
```sql
CREATE OR REPLACE FUNCTION before_order_delete()
RETURNS TRIGGER AS $$
BEGIN
    DELETE FROM "Bid"
    WHERE "orderId" = OLD.id;
    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER before_order_delete_trigger
BEFORE DELETE ON "Order"
FOR EACH ROW
EXECUTE FUNCTION before_order_delete();
```


`