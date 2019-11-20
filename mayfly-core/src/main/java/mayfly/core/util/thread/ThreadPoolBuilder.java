package mayfly.core.util.thread;

import java.util.concurrent.BlockingQueue;
import java.util.concurrent.Executors;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.RejectedExecutionHandler;
import java.util.concurrent.SynchronousQueue;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/**
 * @author meilin.huang
 * @version 1.0
 * @date 2019-11-20 2:50 下午
 */
public class ThreadPoolBuilder {

    /** 初始池大小 */
    private int corePoolSize;
    /** 最大池大小（允许同时执行的最大线程数） */
    private int maxPoolSize = Integer.MAX_VALUE;
    /** 线程存活时间，即当池中线程多于初始大小时，多出的线程保留的时长 */
    private long keepAliveTime = TimeUnit.SECONDS.toNanos(60);
    /** 队列，用于存在未执行的线程 */
    private BlockingQueue<Runnable> workQueue;
    /** 线程工厂，用于自定义线程创建 */
    private ThreadFactory threadFactory;
    /** 当线程阻塞（block）时的异常处理器，所谓线程阻塞即线程池和等待队列已满，无法处理线程时采取的策略 */
    private RejectedExecutionHandler handler;
    /** 核心线程执行超时后是否回收线程 */
    private Boolean allowCoreThreadTimeOut;

    private ThreadPoolBuilder() {}

    /**
     * 设置初始池大小，默认0
     *
     * @param corePoolSize 初始池大小
     * @return this
     */
    public ThreadPoolBuilder corePoolSize(int corePoolSize) {
        this.corePoolSize = corePoolSize;
        return this;
    }

    /**
     * 设置最大池大小（允许同时执行的最大线程数）
     *
     * @param maxPoolSize 最大池大小（允许同时执行的最大线程数）
     * @return this
     */
    public ThreadPoolBuilder maxPoolSize(int maxPoolSize) {
        this.maxPoolSize = maxPoolSize;
        return this;
    }

    /**
     * 设置线程存活时间，即当池中线程多于初始大小时，多出的线程保留的时长
     *
     * @param keepAliveTime 线程存活时间
     * @param unit 单位
     * @return this
     */
    public ThreadPoolBuilder keepAliveTime(long keepAliveTime, TimeUnit unit) {
        return keepAliveTime(unit.toNanos(keepAliveTime));
    }

    /**
     * 设置线程存活时间，即当池中线程多于初始大小时，多出的线程保留的时长，单位纳秒
     *
     * @param keepAliveTime 线程存活时间，单位纳秒
     * @return this
     */
    public ThreadPoolBuilder keepAliveTime(long keepAliveTime) {
        this.keepAliveTime = keepAliveTime;
        return this;
    }

    /**
     * 设置队列，用于存在未执行的线程<br>
     * 可选队列有：
     *
     * <pre>
     * 1. SynchronousQueue    它将任务直接提交给线程而不保持它们。当运行线程小于maxPoolSize时会创建新线程，否则触发异常策略
     * 2. LinkedBlockingQueue 无界队列，当运行线程大于corePoolSize时始终放入此队列，此时maximumPoolSize无效
     * 3. ArrayBlockingQueue  有界队列，相对无界队列有利于控制队列大小，队列满时，运行线程小于maxPoolSize时会创建新线程，否则触发异常策略
     * </pre>
     * @param workQueue 队列
     * @return this
     */
    public ThreadPoolBuilder workQueue(BlockingQueue<Runnable> workQueue) {
        this.workQueue = workQueue;
        return this;
    }

    /**
     * 使用{@link SynchronousQueue} 做为等待队列（非公平策略）<br>
     * 它将任务直接提交给线程而不保持它们。当运行线程小于maxPoolSize时会创建新线程，否则触发异常策略
     * @return this
     */
    public ThreadPoolBuilder useSynchronousQueue() {
        return useSynchronousQueue(false);
    }

    /**
     * 使用{@link SynchronousQueue} 做为等待队列<br>
     * 它将任务直接提交给线程而不保持它们。当运行线程小于maxPoolSize时会创建新线程，否则触发异常策略
     *
     * @param fair 是否使用公平访问策略
     * @return this
     */
    public ThreadPoolBuilder useSynchronousQueue(boolean fair) {
        return workQueue(new SynchronousQueue<Runnable>(fair));
    }

    /**
     * 设置线程工厂，用于自定义线程创建
     *
     * @param threadFactory 线程工厂
     * @return this
     * @see ThreadFactoryBuilder
     */
    public ThreadPoolBuilder threadFactory(ThreadFactory threadFactory) {
        this.threadFactory = threadFactory;
        return this;
    }

    /**
     * 设置当线程阻塞（block）时的异常处理器，所谓线程阻塞即线程池和等待队列已满，无法处理线程时采取的策略
     * <p>
     *
     * @param handler {@link RejectedExecutionHandler}
     * @return this
     */
    public ThreadPoolBuilder rejectHandler(RejectedExecutionHandler handler) {
        this.handler = handler;
        return this;
    }

    /**
     * 设置线程执行超时后是否回收线程
     * @param allowCoreThreadTimeOut 线程执行超时后是否回收线程
     * @return this
     */
    public ThreadPoolBuilder allowCoreThreadTimeOut(boolean allowCoreThreadTimeOut) {
        this.allowCoreThreadTimeOut = allowCoreThreadTimeOut;
        return this;
    }

    /**
     * 创建ExecutorBuilder，开始构建
     *
     * @return {@link ThreadPoolBuilder}
     */
    public static ThreadPoolBuilder builder() {
        return new ThreadPoolBuilder();
    }

    /**
     * 构建ThreadPoolExecutor
     */
    public ThreadPoolExecutor build() {
        return build(this);
    }

    /**
     * 构建ThreadPoolExecutor
     *
     * @param builder {@link ThreadPoolBuilder}
     * @return {@link ThreadPoolExecutor}
     */
    private static ThreadPoolExecutor build(ThreadPoolBuilder builder) {
        final int corePoolSize = builder.corePoolSize;
        final int maxPoolSize = builder.maxPoolSize;
        final long keepAliveTime = builder.keepAliveTime;
        final BlockingQueue<Runnable> workQueue;
        if (builder.workQueue != null) {
            workQueue = builder.workQueue;
        } else {
            // corePoolSize为0则要使用SynchronousQueue避免无限阻塞
            workQueue = (corePoolSize <= 0) ? new SynchronousQueue<Runnable>() : new LinkedBlockingQueue<Runnable>();
        }
        final ThreadFactory threadFactory = (builder.threadFactory != null) ? builder.threadFactory : Executors.defaultThreadFactory();
        RejectedExecutionHandler handler = builder.handler == null ? new ThreadPoolExecutor.AbortPolicy() : builder.handler;

        final ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(
                corePoolSize,
                maxPoolSize,
                keepAliveTime, TimeUnit.NANOSECONDS,
                workQueue,
                threadFactory,
                handler
        );
        if (builder.allowCoreThreadTimeOut != null) {
            threadPoolExecutor.allowCoreThreadTimeOut(builder.allowCoreThreadTimeOut);
        }
        return threadPoolExecutor;
    }
}