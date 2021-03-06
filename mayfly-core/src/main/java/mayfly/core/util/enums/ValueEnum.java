package mayfly.core.util.enums;

/**
 * 最简单的枚举类，即只含value的枚举（实现此接口可使用{@link EnumUtils}中的方法
 * 以及{@link mayfly.core.validation.annotation.EnumValue}注解）
 *
 * @author meilin.huang
 * @version 1.0
 * @date 2019-04-22 10:10
 */
public interface ValueEnum<T> {

    /**
     * 获取枚举值
     *
     * @return 枚举值
     */
    T getValue();
}
