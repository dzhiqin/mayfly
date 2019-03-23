package mayfly.sys.redis.web.vo;

import lombok.Builder;
import lombok.Data;

import java.util.List;

/**
 * @author meilin.huang
 * @version 1.0
 * @date 2019-01-22 10:57 AM
 */
@Data
@Builder
public class KeyScanVO {

    private String cursor;

    private List<String> keys;

    private long dbsize;
}