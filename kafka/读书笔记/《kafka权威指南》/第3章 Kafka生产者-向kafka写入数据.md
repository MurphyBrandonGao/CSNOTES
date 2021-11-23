# 第3章 Kafka生产者-向kafka写入数据

## 3.5 序列化器

### 3.5.2 使用Avro序列化

Avrio是一种与编程语言无关的序列化格式。

Avro 数据通过与语言无关的schema 来定义。schema 通过JSON 来描述，数据被序列化成二进制文件或JSON 文件，不过一般会使用二进制文件。Avro在读写文件时需要用到schema, schema 一般会被内嵌在数据文件里。

当负责写消息的应用程序使用了新的schema，负责读消息的应用程序可以继续处理消息而无需做任何改动，

## 3.6 分区

producerRecord对象可以只包含目标主题和值，键可以设置为默认的null，不过大多数应用程序会用到键。键有两个用途：可以作为消息的附加信息。也可以用来决定消息被写入主题的哪个分区，拥有相同键的消息被写入到同一个分区。

```java
// 创建包含键值的记录
ProducerRecord<Integer, String> record = new ProducerRecord<>("CustomerCountry", "lab", "USA");

// 创建键为null值的记录，不指定键即可
ProducerRecord<Integer, String> record = new ProducerRecord<>("CustomerCountry", "USA");
```

如果键为null且使用了默认的分区器，分区器使用**轮询**算法将消息均衡地分布到各个**可用**的分区上。

如果键不为空且使用了默认的分区器，kafka会对键进行散列（使用kafka自己的散列算法），然后根据散列值把消息映射到特定分区上。为了保证同一个键总是映射到同一个分区，在映射时会使用主题的**所有分区**而不仅仅是可用的分区。但是如果写入数据的分区是不可用的，那么就会发生错误。

只有在不改变分区数量的情况下，键与分区之间的映射才能保持不变。如果要使用键来映射分区，最好在创建主题的时候就把分区规划好而且永远不要增加新的分区。

自定义分区器：

![](/Users/gaobo/Documents/Typora/typora-pic/iShot2021-11-06 19.27.44-6212904.png)

