public class LRUCache<K, V> extends LinkedHashMap<K, V> {
    private int capacity;

    /**
     * 传递进来最多能缓存多少数据
     *
     * @param capacity 缓存大小
     */
    public LRUCache(int capacity) {
        super(capacity, 0.75f, true);
        this.capacity = capacity;
    }
    
    /**
     * 如果map中的数据量大于设定的最大容量，返回true，再新加入对象时删除最老的数据
     *
     * @param eldest 最老的数据项
     * @return true则移除最老的数据
     */
    @Override
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        // 当 map中的数据量大于指定的缓存个数的时候，自动移除最老的数据
        return size() > capacity;
    }
}

class LRUCache {
    private Node head;
    private Node tail;
    private HashMap<Integer, Node> map;
    private int capacity;
    
```java
private class Node {
    private int key;
    private int value;
    private Node pre;
    private Node next;
    
    public Node(int key, int value) {
        this.key = key;
        this.value = value;
    }
}

public LRUCache(int capacity) {
    this.capacity = capacity;
    this.map = new HashMap<>(capacity * 4 / 3);
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    head.next = tail;
    tail.pre = head;
}

public int get(int key) {
    if (!map.containsKey(key)) {
        return -1;
    }
    Node node = map.get(key);
    unlink(node);
    appendHead(node);
    
    return node.value;
}

public void put(int key, int value) {
    if (map.containsKey(key)) {
        unlink(map.get(key));
    }
    Node node = new Node(key, value);
    map.put(key, node);
    appendHead(node);
    
    if (map.size() > capacity) {
        Node removeNode = removeLast();
        map.remove(removeNode.key);
    }
}

private void unlink(Node node) {
    Node next = node.next;
    Node pre = node.pre;
    pre.next = next;
    next.pre = pre;
    node.next = null;
    node.pre = null;
}

private void appendHead(Node node) {
    Node next = head.next;
    node.next = next;
    next.pre = node;
    head.next = node;
    node.pre = head;
}

private Node removeLast() {
    Node node = tail.pre;
    Node pre = node.pre;
    pre.next = tail;
    tail.pre = pre;
    node.next = null;
    node.pre = null;
    return node;
}
}
```